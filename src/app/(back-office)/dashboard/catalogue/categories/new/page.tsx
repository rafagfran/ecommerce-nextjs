import { Heading } from "@/components/dashboard/layout/Heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Upload } from "lucide-react";

const Input = ({
  id,
  label,
  placeholder,
}: { id?: string; label?: string; placeholder: string }) => (
  <div className="flex flex-col gap-2  w-full">
    {label && (
      <label htmlFor={id} className="">
        {label}
      </label>
    )}
    <input
      id={id}
      placeholder={placeholder}
      className="focus:outline-none h-10 px-3 border border-input rounded-md"
    />
  </div>
);

export default function NewCategoryPage() {
  return (
    <main className="space-y-6">
      <Heading title="Categorias" />
      <Card>
        <CardHeader>
          <h1 className="text-2xl">Informações da categoria</h1>
        </CardHeader>
        <CardContent className="space-y-6">
          <Input
            id="name"
            label="Nome da Categoria"
            placeholder="Digite o nome da categoria"
          />
          <div className="space-y-2">
            <label htmlFor={"description"} className="">
              Descrição
            </label>
            <Textarea
              id="description"
              name="description"
              placeholder="Digite uma descrição para a categoria"
              rows={4}
            />
          </div>
          <div>
            <label htmlFor="image" className="">
              Imagem da Categoria
            </label>
            <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <p className="mt-2 text-sm text-gray-500">
                Clique para fazer upload ou arraste uma imagem
              </p>
            </div>
            <input id="image" type="file" accept="image/*" className="hidden" />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <h1 className="text-2xl">Subcategorias</h1>
        </CardHeader>
        <CardContent className="flex items-center gap-4">
          <Input placeholder="Nome da subcategoria" />
          <Button type="button" className="gap2">
            <Plus className="h-6 w-6 mr-2" />
            <span>Adicionar</span>
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h1 className="text-2xl">Informações de SEO</h1>
        </CardHeader>
        <CardContent className="space-y-6">
          <Input
            id="name"
            label="Meta título"
            placeholder="Meta título para SEO"
          />
          <div className="space-y-2">
            <label htmlFor={"description"} className="">
              Meta Descrição
            </label>
            <Textarea
              id="description"
              name="description"
              placeholder="Meta descriçao para SEO"
              rows={4}
            />
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
