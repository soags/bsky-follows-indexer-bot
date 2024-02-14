import { BskyAgent } from "@atproto/api";

const BSKY_SERVICE = "https://bsky.social";
const USER_NAME = "<username>";
const PASSWORD = "<apppassword>";

const agent = new BskyAgent({
  service: BSKY_SERVICE,
});

const main = async () => {
  await agent.login({
    identifier: USER_NAME,
    password: PASSWORD,
  });

  const followsResponse = await agent.getFollows({ actor: agent.session!.did });
  const follows = followsResponse.data.follows.map((follow) => follow.did);
  console.log(follows);
};

main();
