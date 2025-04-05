import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import TableComponent from "@/components/tables/TableComponent";

import { restaurantList } from "@/data/resto-admin";

export default function CustomersPage() {
  const columnsData = [
    {
      accessorKey: "first_name",
      header: "Name",
    },
    {
      accessorKey: "email_address",
      header: "Email",
    },
    {
      accessorKey: "gender",
      header: "Jenis Kelamin",
    },
  ];

  const { data } = restaurantList;

  return (
    <div>
      <PageBreadcrumb pageTitle="Customers" />
      <div className="space-y-6">
        {/* <div className="relative">
          <div className="absolute top-5 right-6 z-10">
            <Button size="sm" as="link" href="/admin/customers/create">
              Create User
            </Button>
          </div>
        </div> */}
        <ComponentCard title="List Customers">
          <TableComponent columns={columnsData} data={data} />
        </ComponentCard>
      </div>
    </div>
  );
}
