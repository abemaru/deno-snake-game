import { GameRequest } from "./types.ts";


export const root = () => {
	return {
		apiversion: "1",
		author: "abemaru",
		color: "#AABBAA",
		head: "beluga",
		tail: "bolt"
	};
}

export const move = (gameRequest: GameRequest) => {
	return { move: "right" };
}
