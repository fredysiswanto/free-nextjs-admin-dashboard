import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import TableComponent from "@/components/tables/TableComponent";
import { Metadata } from "next";
import { customerList } from "@/data/customer";
import Button from "@/components/ui/button/Button";

export const metadata: Metadata = {
  title: "Next.js Blank Page | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Blank Page TailAdmin Dashboard Template",
};

export default function UsersPage() {
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

  const { data } = customerList;

  return (
    <div>
      <PageBreadcrumb pageTitle="Users" />
      <div className="space-y-6">
        <div className="relative">
          <div className="absolute top-5 right-6 z-10">
            <Button size="sm" as="link" href="/admin/users/create">
              Create User
            </Button>
          </div>
        </div>
        <ComponentCard title="List Users">
          <TableComponent columns={columnsData} data={data} />
        </ComponentCard>
      </div>
    </div>
  );
}
