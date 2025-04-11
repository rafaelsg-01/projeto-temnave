
import { Type_envData } from "./universal_types"


export default {
	async fetch(Parameter_request: Request, Parameter_env: Type_envData, Parameter_ctx: ExecutionContext): Promise<Response> {
		if (Parameter_request.method === 'OPTIONS') {
			return Function_handleOptions(Parameter_request, Parameter_env)
		}

		const Const_response = await Function_handleRequest(Parameter_request, Parameter_env, Parameter_ctx)
		Const_response.headers.set('Access-Control-Allow-Origin', '*')
		Const_response.headers.set('Access-Control-Allow-Credentials', 'true')
		Const_response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, HEAD, PATCH')
		Const_response.headers.set('Access-Control-Allow-Headers', 'Content-Type')
		Const_response.headers.set('Access-Control-Expose-Headers', 'Content-Type')
		Const_response.headers.set('Access-Control-Max-Age', '86400')

		return Const_response
	}
}

async function Function_handleOptions(Parameter_request: Request, Parameter_env: Type_envData): Promise<Response> {
	const Const_response = new Response(null, { status: 200 })

	Const_response.headers.set('Access-Control-Allow-Origin', '*')
	Const_response.headers.set('Access-Control-Allow-Credentials', 'true')
	Const_response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, HEAD, PATCH')
	Const_response.headers.set('Access-Control-Allow-Headers', 'Content-Type')
	Const_response.headers.set('Access-Control-Expose-Headers', 'Content-Type')
	Const_response.headers.set('Access-Control-Max-Age', '86400')
	return Const_response
}

async function Function_handleRequest(Parameter_request: Request, Parameter_env: Type_envData, Parameter_ctx: ExecutionContext): Promise<Response> {
	const Const_newUrl = new URL(Parameter_request.url)
	const Const_pathName = Const_newUrl.pathname

	if (Const_pathName.startsWith('/get-100-players') && Parameter_request.method === 'GET') {
		try {
			// Chama d1 e pega os 100 players
			const Const_d1 = await Parameter_env.D1_temnaveWorkers.prepare('SELECT id_custom, nick, score FROM players ORDER BY score DESC LIMIT 100').all<{id_custom: number; nick: string; score: number}>()
			
			const Const_bodyResponse = Const_d1.results || []

			const Const_response = new Response(JSON.stringify(Const_bodyResponse), {
				status: 200
			})
	
			return Const_response
		}

		catch (error) {
			console.log('error:', error)
			const Const_response = new Response(null, {
				status: 400
			})
	
			return Const_response
		}
	}

	if (Const_pathName.startsWith('/post-player') && Parameter_request.method === 'POST') {
		try {
			// Insert or update player score and nick
			const Const_body = await Parameter_request.json() as {id_custom: number; nick: string; score: number}

			// Only comand for insert or update player (score and nick)
			const Const_comand = `
			INSERT INTO players (id_custom, nick, score)
			VALUES (?1, ?2, ?3)
			ON CONFLICT(id_custom) DO UPDATE SET
			nick = ?2,
			score = ?3
			`

			const Const_d1 = await Parameter_env.D1_temnaveWorkers.prepare(Const_comand).bind(Const_body.id_custom, Const_body.nick, Const_body.score).run()

			if (Const_d1.error) {
				console.log('error:', Const_d1.error)

				const Const_response = new Response(null, {
					status: 400
				})

				return Const_response
			}

			const Const_response = new Response(null, {
				status: 200
			})
	
			return Const_response
		}

		catch (error) {
			console.log('error:', error)
			const Const_response = new Response(null, {
				status: 400
			})
	
			return Const_response
		}
	}

	else {
		console.log('[/]: [not_found]:', Parameter_request.url)
		return new Response('not found', {status: 404})
	}
}
