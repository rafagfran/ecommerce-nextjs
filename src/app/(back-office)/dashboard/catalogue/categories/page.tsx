import { Heading } from "@/components/dashboard/layout/Heading";
import { CustomDataTable } from "@/components/dashboard/overview/table/CustomDataTable";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Download,
  Filter,
  type LucideIcon,
  Plus,
  Printer,
  Search,
} from "lucide-react";

const ActionButton = ({
  icon: Icon,
  label,
  ...props
}: {
  icon: LucideIcon;
  label: string;
}) => (
  <Button variant="outline" size="icon" {...props}>
    <Icon className="h-4 w-4" />
    <span className="sr-only">{label}</span>
  </Button>
);

const SearchInput = () => (
  <div className="relative h-10 px-3 border-2 border-input rounded-md flex items-center ">
    <Search className=" h-4 w-4 text-muted-foreground" />
    <input
      placeholder="Pesquisar"
      className="focus:outline-none ml-4 bg-transparent"
    />
  </div>
);

export default function page() {
  return (
    <main className="space-y-6">
      <Card>
        <CardHeader>
          <Heading title="Categorias" />
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-x-4 md:space-y-0">
              <SearchInput />
              <Button
                variant="outline"
                size={"lg"}
                className="w-full md:w-auto"
              >
                <Filter className="mr-2 h-4 w-4" />
                Filtros
              </Button>
            </div>
            <div className="flex items-center space-x-2">
              <ActionButton icon={Printer} label="Imprimir" />
              <ActionButton icon={Download} label="Download" />
              <Button className="w-full md:w-auto">
                <Plus className="mr-2 h-4 w-4" />
                Nova Categoria
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <CustomDataTable />
        </CardContent>
      </Card>
    </main>
  );
}
