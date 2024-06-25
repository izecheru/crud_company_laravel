import { Pagination } from "@/types";

interface PaginationProps {
    pagination: Pagination;
    onPageChange: (url: string) => void;
}

export default function PaginationComponent({
    pagination,
    onPageChange,
}: PaginationProps) {
    const { current_page, last_page, links } = pagination;

    const handlePageChange = (url: string | null) => {
        if (url) {
            onPageChange(url);
        }
    };

    return (
        <div className="flex items-center justify-between mt-4">
            <nav
                className="relative z-0 inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
            >
                <button
                    onClick={() => handlePageChange(pagination.prev_page_url)}
                    disabled={!pagination.prev_page_url}
                    className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${
                        !pagination.prev_page_url && "cursor-not-allowed"
                    }`}
                >
                    Previous
                </button>

                {links.map((link, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(link.url)}
                        className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium ${
                            link.active
                                ? "bg-blue-500 text-black text-xl"
                                : "text-gray-500 hover:bg-gray-50"
                        }`}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                ))}

                <button
                    onClick={() => handlePageChange(pagination.next_page_url)}
                    disabled={!pagination.next_page_url}
                    className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${
                        !pagination.next_page_url && "cursor-not-allowed"
                    }`}
                >
                    Next
                </button>
            </nav>
        </div>
    );
}
