import EcommerceMetrics from "../../components/ecommerce/EcommerceMetrics";

import Schedules from "../../components/ecommerce/Schedules";
import TradeShares from "../../components/ecommerce/TradeShares";

import PageMeta from "../../components/common/PageMeta";
import Statistics from './../../components/ecommerce/Statistics';

export default function Home() {
  return (
    <>
      <PageMeta
        title="EQUIBOT || Automated Market"
        description="This is React.js Ecommerce Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-7">
          <EcommerceMetrics />

          <Statistics />
        </div>

        <div className="col-span-12 xl:col-span-5">
          <TradeShares />
        </div>

        <div className="col-span-12">
          <Schedules />
        </div>


      </div>
    </>
  );
}
