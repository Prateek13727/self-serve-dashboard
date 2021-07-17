import CorePricingTable from "./CorePricingTable";

const Taskbar = () => {
  return <>
    Taskbar
  </>
};

const CorePricingTabs = () => {
  return <>
    <CorePricingTable />
  </> 
} ;

const CorePricingList = () => {
  return  <>
    <Taskbar />
    <CorePricingTabs />
  </>
}

export default CorePricingList;