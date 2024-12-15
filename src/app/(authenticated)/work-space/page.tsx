import { PageHeader, PageLayout, PageSection } from "~/components/layouts/page";
import { SearchInput } from "~/components/ui/SearchInput";

export default function Page() {
  return (
    <PageLayout className="flex flex-col gap-2" width="screen">
          <PageHeader
            title={"Epic Cleaners"}
            subTitle={"Best cleaning service in Yaounde"}
            actions={
              <SearchInput />
            }
          />
      <div className={"flex justify-between gap-4 w-full"}>
        <PageSection className={""}>
        </PageSection>
      </div>
    </PageLayout>
  );
}
