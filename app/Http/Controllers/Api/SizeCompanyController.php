<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\SizeCompanyRequest;
use App\Http\Resources\SizeCompanyResource;
use App\Models\SizeCompany;
use Illuminate\Http\Request;

class SizeCompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return SizeCompanyResource::collection(SizeCompany::latest()->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(SizeCompanyRequest $request)
    {
        $legalStatus = SizeCompany::create($request->validated());
        
        return new SizeCompanyResource($legalStatus);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\SizeCompany  $sizeCompany
     * @return \Illuminate\Http\Response
     */
    public function show(SizeCompany $sizeCompany)
    {
        return new SizeCompanyResource($sizeCompany);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SizeCompany  $sizeCompany
     * @return \Illuminate\Http\Response
     */
    public function update(SizeCompanyRequest $request, SizeCompany $sizeCompany)
    {
        $sizeCompany->update($request->validated());

        return new SizeCompanyResource($sizeCompany);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SizeCompany  $sizeCompany
     * @return \Illuminate\Http\Response
     */
    public function destroy(SizeCompany $sizeCompany)
    {
        $sizeCompany->delete();

        return response()->noContent();
    }
}
