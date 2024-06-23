<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Company;
use App\Models\Region;
use App\Models\Locality;
use Illuminate\Support\Facades\Redirect;

class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = Company::query()->with('locality.region');

        if ($request->filled('name')) {
            $query->where('name', 'like', '%' . $request->input('name') . '%');
        }

        if ($request->filled('locality')) {
            $query->whereHas('locality', function ($query) use ($request) {
                $query->where('locality_name', 'like', '%' . $request->input('locality') . '%');
            });
        }

        if ($request->filled('region')) {
            $query->whereHas('locality.region', function ($query) use ($request) {
                $query->where('name', 'like', '%' . $request->input('region') . '%');
            });
        }
        $companies = $query->paginate(20);

        return Inertia::render('Companies', [
            'companies' => $companies,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $company = Company::findOrFail($id);
        $availableRegions = Region::with('localities')->get();
        return Inertia::render('Company/Edit', [
            'company' => $company,
            'regions' => $availableRegions,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name' => 'required|string|unique:companies,name,' . $id,
        ]);

        $company = Company::findOrFail($id);

        $company->name = $request->input('name');
        $company->region_name = $request->input('region');
        $company->locality_name = $request->input('locality');

        $company->save();

        return Redirect::route('companies.edit', ['id' => $company->id])
            ->with('success', 'Company updated successfully.');
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $selectedCompany = Company::findOrFail($id);
        $selectedCompany->delete();
        return Redirect::to('/companies');
    }
}
