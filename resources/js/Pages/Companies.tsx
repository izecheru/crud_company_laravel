import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, useForm } from "@inertiajs/react";
import { Company, CompanyPageProps } from "@/types";
import TextInput from "@/Components/TextInput";
import { useEffect, useRef } from "react";
import PrimaryButton from "@/Components/PrimaryButton";
import PaginationComponent from "@/Components/Pagination";

export default function Companies({ auth, companies }: CompanyPageProps) {
    const nameInput = useRef<HTMLInputElement>(null);
    const regionInput = useRef<HTMLInputElement>(null);
    const localityInput = useRef<HTMLInputElement>(null);

    const searchDebounceTimer = useRef<ReturnType<typeof setTimeout> | null>(
        null
    );
    console.log(companies);
    const {
        data,
        setData,
        get,
        delete: destroy,
    } = useForm({
        name: "",
        locality: "",
        region: "",
    });

    function getResults() {
        if (data.name || data.locality || data.region) {
            get(route("companies", data), {
                preserveScroll: true,
                preserveState: true,
            });
        } else {
            get(route("companies"), {
                preserveScroll: true,
                preserveState: true,
            });
        }
    }

    useEffect(() => {
        // inertia would reload page and the input would
        // be 1 character behind
        if (searchDebounceTimer.current) {
            clearTimeout(searchDebounceTimer.current);
        }
        searchDebounceTimer.current = setTimeout(getResults, 1000);
    }, [data.name, data.locality, data.region]);

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setData(name as "name" | "locality" | "region", value);
    }

    function deleteCompany(company: Company) {
        destroy(route("companies.destroy", { id: company.id }), {
            preserveScroll: true,
            onFinish: () => router.reload(),
        });
    }
    function handlePageChange(url: string) {
        get(url, {
            preserveState: true,
        });
    }
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Companies" />
            <div className="py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex flex-row gap-4 p-3">
                    <TextInput
                        autoComplete="name"
                        placeholder="Search by name"
                        id="name"
                        ref={nameInput}
                        name="name"
                        className="block w-[200px] mt-1"
                        onChange={handleInputChange}
                    />
                    <TextInput
                        autoComplete="region"
                        placeholder="Search by region"
                        id="region"
                        ref={regionInput}
                        name="region"
                        className="block w-[200px] mt-1"
                        onChange={handleInputChange}
                    />
                    <TextInput
                        autoComplete="locality"
                        placeholder="Search by locality"
                        id="locality"
                        ref={localityInput}
                        name="locality"
                        className="block w-[200px] mt-1"
                        onChange={handleInputChange}
                    />
                </div>

                <div className="mx-auto text-xl text-white rounded-md max-w-7xl sm:px-6 lg:px-8 bg-slate-500">
                    {companies.data.map((company, index) => (
                        <div
                            className="flex flex-row justify-between gap-3 py-3"
                            key={index}
                        >
                            <div className="flex flex-row justify-center text-center">
                                {index + 1}
                            </div>
                            <div className="flex flex-row justify-center w-1/3 text-center">
                                {company.name}
                            </div>
                            <div className="flex flex-row justify-center w-1/3 text-center">
                                {company.locality.region.name}
                            </div>
                            <div className="flex flex-row justify-center w-1/3 text-center">
                                {company.locality.name}
                            </div>
                            <div>
                                <Link
                                    className="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-800 border border-transparent rounded-md hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    href={route("companies.edit", {
                                        id: company.id,
                                    })}
                                >
                                    UPDATE
                                </Link>
                            </div>
                            <div>
                                <PrimaryButton
                                    onClick={(e) => deleteCompany(company)}
                                    className="bg-red-500 "
                                >
                                    Delete
                                </PrimaryButton>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-row items-center justify-center pb-5">
                <PaginationComponent
                    pagination={companies}
                    onPageChange={handlePageChange}
                />
            </div>
        </AuthenticatedLayout>
    );
}
