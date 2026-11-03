import AudiencePage, { audienceMetadata } from "../components/AudiencePage";
import { RedditThread } from "../components/Mocks";
import { AUDIENCES } from "../lib/site";

const a = AUDIENCES.find((x) => x.slug === "reddit-marketing-for-startups")!;

export const metadata = audienceMetadata(a);

export default function Page() {
  return (
    <AudiencePage
      a={a}
      media={
        <RedditThread
          sub="r/startups"
          user="u/two_founders"
          age="3h"
          title="How did you actually get your first 100 users? Launch spike is over and signups are flat"
          votes={428}
          comments={203}
          replies={[
            { user: "u/maya_builds", flair: "founder, acme", text: "I built acme, so take this with salt. Ours came from answering \"how do you handle X\" threads for two months, then a launch post where the sub allowed it. No single viral post.", votes: 187 },
          ]}
        />
      }
    />
  );
}
