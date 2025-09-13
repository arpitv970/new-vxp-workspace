import * as grpc from "@grpc/grpc-js";
import {
	AudioChunk,
	AudioResponse,
	MediaServiceServiceName,
	StartSessionRequest,
	StartSessionResponse,
} from "../../../packages/proto/generated/media";

/**
 * Implement gRPC server handlers manually
 */

const mediaServiceImpl = {
	// Unary RPC
	StartSession: (
		call: grpc.ServerUnaryCall<StartSessionRequest, StartSessionResponse>,
		callback: grpc.sendUnaryData<StartSessionResponse>,
	) => {
		console.log("StartSession req: ", call.request.clientId);

		// TODO: imporove the sessionId implementation
		const sessionId = `sess_${Date.now()}`;

		callback(null, {
			sessionId,
		});
	},

	StreamAudio: (call: grpc.ServerDuplexStream<AudioChunk, AudioResponse>) => {
		call.on("data", (chunk: AudioChunk) => {
			console.log(`Recived PCM length:`, chunk.pcm.length);

			// Example: generated text response
			// TODO: replace with VAD / AI Later
			call.write({
				text: `Processed ${chunk.pcm.length} bytes`,
			} as AudioResponse);
		});

		call.on("end", () => {
			console.log("Stream ended");
			call.end();
		});

		call.on("error", (err) => {
			console.error(`Stream error: `, err);
		});
	},
};

/**
 * Start gRPC Server
 */

const main = () => {
	const server = new grpc.Server();

	// @ts-ignore: map generated service name to handlers
	server.addService(
		{
			[MediaServiceServiceName]: {
				StartSession: mediaServiceImpl.StartSession,
				StreamAudio: mediaServiceImpl.StreamAudio,
			},
		} as any,
		mediaServiceImpl,
	);

	const port = "0.0.0.0:50051";
	server.bindAsync(port, grpc.ServerCredentials.createInsecure(), (err) => {
		if (err) throw err;
		console.log(`🚀 MediaService running at ${port}`);
	});
};

main();
