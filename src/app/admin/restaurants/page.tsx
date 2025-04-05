import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import TableComponent from "@/components/tables/TableComponent";
import Button from "@/components/ui/button/Button";
import { restaurantList } from "@/data/resto-admin";

export default function RestaurantsPage() {
  const columnsData = [
    {
      accessorKey: "restaurant_category.restocatg_name",
      header: "Category",
    },
    {
      accessorKey: "resto_name",
      header: "Restaurant Name",
    },
    {
      accessorKey: "resto_email",
      header: "Email Address",
    },
    {
      accessorKey: "resto_landline",
      header: "Landline No.",
    },
    {
      accessorKey: "resto_website",
      header: "Website",
    },
    {
      accessorKey: "restoadmin.first_name",
      header: "Restaurant Admin",
    },
    {
      accessorKey: "date_created",
      header: "Date Listed",
    },
  ];

  const { data } = restaurantList;

  return (
    <div>
      <PageBreadcrumb pageTitle="Restaurant" />
      <div className="space-y-6">
        <div className="relative">
          <div className="absolute top-5 right-6 z-10">
            <Button size="sm" as="link" href="/admin/resta/create">
              Create Restaurant
            </Button>
          </div>
        </div>
        <ComponentCard title="List Restaurant">
          <TableComponent columns={columnsData} data={data} />
        </ComponentCard>
      </div>
    </div>
  );
}
