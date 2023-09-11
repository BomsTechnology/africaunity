<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ContractTypeRequest;
use App\Http\Resources\ContractTypeResource;
use App\Models\ContractType;
use Illuminate\Http\Request;

class ContractTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ContractTypeResource::collection(ContractType::latest()->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ContractTypeRequest $request)
    {
        $legalStatus = ContractType::create($request->validated());
        
        return new ContractTypeResource($legalStatus);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ContractType  $contractType
     * @return \Illuminate\Http\Response
     */
    public function show(ContractType $contractType)
    {
        return new ContractTypeResource($contractType);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ContractType  $contractType
     * @return \Illuminate\Http\Response
     */
    public function update(ContractTypeRequest $request, ContractType $contractType)
    {
        $contractType->update($request->validated());

        return new ContractTypeResource($contractType);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ContractType  $contractType
     * @return \Illuminate\Http\Response
     */
    public function destroy(ContractType $contractType)
    {
        $contractType->delete();

        return response()->noContent();
    }
}
