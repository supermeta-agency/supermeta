import AudiencePage, { audienceMetadata } from "../components/AudiencePage";
import { Serp } from "../components/Mocks";
import { AUDIENCES } from "../lib/site";

const a = AUDIENCES.find((x) => x.slug === "reddit-marketing-for-saas")!;

export const metadata = audienceMetadata(a);

export default function Page() {
  return (
    <AudiencePage
      a={a}
      media={
        <Serp
          query="best feedback tool for small saas team reddit"
          note="be in this one ^_^"
        />
      }
    />
  );
}
