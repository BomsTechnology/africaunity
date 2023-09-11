<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\WorkDepartmentRequest;
use App\Http\Resources\WorkDepartmentResource;
use App\Models\WorkDepartment;
use Illuminate\Http\Request;

class WorkDepartmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return WorkDepartmentResource::collection(WorkDepartment::latest()->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(WorkDepartmentRequest $request)
    {
        $legalStatus = WorkDepartment::create($request->validated());
        
        return new WorkDepartmentResource($legalStatus);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\WorkDepartment  $workDepartment
     * @return \Illuminate\Http\Response
     */
    public function show(WorkDepartment $workDepartment)
    {
        return new WorkDepartmentResource($workDepartment);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\WorkDepartment  $workDepartment
     * @return \Illuminate\Http\Response
     */
    public function update(WorkDepartmentRequest $request, WorkDepartment $workDepartment)
    {
        $workDepartment->update($request->validated());

        return new WorkDepartmentResource($workDepartment);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\WorkDepartment  $workDepartment
     * @return \Illuminate\Http\Response
     */
    public function destroy(WorkDepartment $workDepartment)
    {
        $workDepartment->delete();

        return response()->noContent();
    }
}
