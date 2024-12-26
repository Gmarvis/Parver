'use client';
import { PageHeader, PageLayout, PageSection } from "~/components/layouts/page";
import { ServiceCard } from "~/components/service/service-card";
import { SearchInput } from "~/components/ui/SearchInput";

export default function Page() {
  return (
    <PageLayout className="flex flex-col gap-2" width="screen">
      <PageHeader
        title={"Epic Cleaners"}
        subTitle={"Best cleaning service in Yaounde"}
        actions={
          <SearchInput
            placeholder="Search Service"
            onChange={(e) => console.log({ searchValue: e.target.value })}
          />
        }
      />
      <div className={"flex justify-between gap-4 w-full"}>
        <PageSection className={"h-[88vh]"}>
          <div className="flex gap-3">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          </div>
        </PageSection>
      </div>
    </PageLayout>
  );
}
