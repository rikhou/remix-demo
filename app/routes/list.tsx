import { json, useLoaderData } from "@remix-run/react";
import { getFacilityList } from "services/facilityList";
import FacilityList from "components/facilityList/FacilityList";

export const loader = async () => {
  const facilityList = await getFacilityList();
  return json({ facilityList });
};

export default function List() {
  const { facilityList } = useLoaderData<typeof loader>();
  return <FacilityList data={facilityList} />;
}
