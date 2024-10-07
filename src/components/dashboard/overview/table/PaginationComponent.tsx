import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const VISIBLE_PAGES = 5;

export function PaginationComponent({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationControlsProps) {
  const renderPaginationButtons = () => {
    const buttons = [];
    let startPage = Math.max(1, currentPage - Math.floor(VISIBLE_PAGES / 2));
    const endPage = Math.min(totalPages, startPage + VISIBLE_PAGES - 1);

    // Exemplo: se endpage = 5 e startpage = 3, então 5 - 3 + 1 = 3
    // Se isto for menor que visible pages, que definimos como 5, significa que não temos 5 páginas visíveis
    // Então, precisamos ajustar o startpage para exibir 5 páginas
    // Isto para quando estiver no final da lista
    if (endPage - startPage + 1 < VISIBLE_PAGES) {
      startPage = Math.max(1, endPage - VISIBLE_PAGES + 1);
    }

    // Se a página atual for maior que 1, então adicionamos o botão fixo para ir para a primeira página
    if (startPage > 1) {
      buttons.push(
        <PaginationItem key="start">
          <Button
            size="icon"
            variant="ghost"
            onClick={() => onPageChange(1)}
            aria-label="Go to first page"
          >
            1
          </Button>
        </PaginationItem>,
      );

      // Se a página atual for maior que 2 (index), então adicionamos o botão de elipse
      if (startPage > 2) {
        buttons.push(<PaginationEllipsis key="ellipsis-start" />);
      }
    }

    // Adicionamos os botões de páginas visíveis
    // Então, se a página atual for 3, então adicionamos os botões de 3 a 7
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <PaginationItem key={i}>
          <Button
            size="icon"
            variant={currentPage === i ? "outline" : "ghost"}
            onClick={() => onPageChange(i)}
            className={currentPage === i ? "border-primary" : ""}
            aria-label={`Go to page ${i}`}
            aria-current={currentPage === i ? "page" : undefined}
          >
            {i}
          </Button>
        </PaginationItem>,
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        buttons.push(<PaginationEllipsis key="ellipsis-end" />);
      }
      buttons.push(
        <PaginationItem key="end">
          <Button
            size="icon"
            variant="ghost"
            onClick={() => onPageChange(totalPages)}
            aria-label="Go to last page"
          >
            {totalPages}
          </Button>
        </PaginationItem>,
      );
    }

    return buttons;
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <Button
            type="button"
            variant="outline"
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
            aria-label="Previous page"
          >
            <ChevronLeftIcon className="w-4 h-4 mr-2" />
            Anterior
          </Button>
        </PaginationItem>

        {renderPaginationButtons()}

        <PaginationItem>
          <Button
            type="button"
            variant="outline"
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
            aria-label="Next page"
          >
            Próximo
            <ChevronRightIcon className="w-4 h-4 ml-2" />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
