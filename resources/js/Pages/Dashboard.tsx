import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";

export default function Dashboard({ auth }: PageProps) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-black hover:translate-y-[-5px] transition ease-in-out shadow-sm sm:rounded-lg">
                        <div className="p-6 text-center text-gray-100">
                            Welcome to CRUD Company project
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
