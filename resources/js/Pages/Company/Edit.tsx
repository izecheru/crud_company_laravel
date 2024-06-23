import Dropdown from "@/Components/Dropdown";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Company, Locality, PageProps, RegionWithLocality } from "@/types";
import { Transition } from "@headlessui/react";
import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler, useEffect, useState } from "react";

export default function EditCompany({
    auth,
    company,
    regions,
}: PageProps<{ company: Company; regions: RegionWithLocality[] }>) {
    const [availableLocalities, setAvailableLocalities] = useState<Locality[]>(
        []
    );
    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            id: company.id,
            name: company.name,
            region: company.region_name,
            locality: company.locality_name,
        });

    // only show localities that are actually
    // in the selected region
    useEffect(() => {
        const selectedRegion = regions.find(
            (region) => region.name === data.region
        );
        if (selectedRegion) {
            setAvailableLocalities(selectedRegion.localities);
            setData("locality", selectedRegion.localities[0].name);
        } else {
            setAvailableLocalities([]);
        }
    }, [data.region, regions]);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        patch(route("companies.update", { id: data.id }), {
            data: {
                name: data.name,
                region: data.region,
                locality: data.locality,
            },
            preserveScroll: true,
        });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Edit company" />
            <div className="py-12">
                <div className="mx-auto space-y-6 max-w-7xl sm:px-6 lg:px-8">
                    <div className="p-4 bg-white shadow sm:p-8 sm:rounded-lg">
                        <section>
                            <header>
                                <h2 className="text-lg font-medium text-gray-900">
                                    Company Information
                                </h2>

                                <p className="mt-1 text-sm text-gray-600">
                                    Update this company information
                                </p>
                            </header>

                            <form onSubmit={submit} className="mt-6 space-y-6">
                                <div>
                                    <InputLabel htmlFor="name" value="Name" />

                                    <TextInput
                                        id="name"
                                        className="block w-full mt-1"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        required
                                        isFocused
                                        autoComplete="name"
                                    />
                                </div>
                                <div className="hidden sm:flex sm:items-center sm:ms-6">
                                    <div className="relative flex flex-row items-center">
                                        <p className="text-xl">Region:</p>

                                        <Dropdown>
                                            <Dropdown.Trigger>
                                                <span className="flex flex-col justify-start rounded-md">
                                                    <button
                                                        type="button"
                                                        className="inline-flex items-start px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-gray-700 focus:outline-none"
                                                    >
                                                        {data.region}
                                                        <svg
                                                            className="ms-2 -me-0.5 h-4 w-4"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </button>
                                                </span>
                                            </Dropdown.Trigger>
                                            <Dropdown.Content>
                                                {regions.map((region) => (
                                                    <Dropdown.Text
                                                        key={region.id}
                                                        className="pl-4 cursor-pointer"
                                                        onClick={() =>
                                                            setData(
                                                                "region",
                                                                region.name
                                                            )
                                                        }
                                                    >
                                                        {region.name}
                                                    </Dropdown.Text>
                                                ))}
                                            </Dropdown.Content>
                                        </Dropdown>
                                    </div>
                                </div>

                                <div className="hidden sm:flex sm:items-center sm:ms-6">
                                    <div className="relative flex flex-row items-center">
                                        <p className="text-xl">Locality:</p>
                                        <Dropdown>
                                            <Dropdown.Trigger>
                                                <span className="flex flex-col justify-start rounded-md">
                                                    <button
                                                        type="button"
                                                        className="inline-flex items-start px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-gray-700 focus:outline-none"
                                                    >
                                                        {data.locality}
                                                        <svg
                                                            className="ms-2 -me-0.5 h-4 w-4"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </button>
                                                </span>
                                            </Dropdown.Trigger>

                                            <Dropdown.Content>
                                                {availableLocalities.map(
                                                    (locality) => (
                                                        <Dropdown.Text
                                                            onClick={() =>
                                                                setData(
                                                                    "locality",
                                                                    locality.name
                                                                )
                                                            }
                                                            key={locality.id}
                                                            className="pl-4 cursor-pointer"
                                                        >
                                                            {locality.name}
                                                        </Dropdown.Text>
                                                    )
                                                )}
                                            </Dropdown.Content>
                                        </Dropdown>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <PrimaryButton
                                        onClick={submit}
                                        disabled={processing}
                                    >
                                        Save information
                                    </PrimaryButton>
                                    <InputError
                                        className="mt-2"
                                        message={errors.name}
                                    />

                                    <Transition
                                        show={recentlySuccessful}
                                        enter="transition ease-in-out"
                                        enterFrom="opacity-0"
                                        leave="transition ease-in-out"
                                        leaveTo="opacity-0"
                                    >
                                        <p className="text-sm text-gray-600">
                                            Saved.
                                        </p>
                                    </Transition>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
