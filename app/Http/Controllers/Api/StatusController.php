<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StatusRequest;
use App\Http\Resources\StatusResource;
use App\Models\Status;

class StatusController extends Controller
{

    public function index()
    {
        return StatusResource::collection(Status::latest()->get());
    }


    public function store(StatusRequest $request)
    {
        $status = Status::create($request->validated());

        return new StatusResource($status);
    }


    public function show(Status $status)
    {
        return new StatusResource($status);
    }


    public function update(StatusRequest $request, Status $status)
    {
        $status->update($request->validated());

        return new StatusResource($status);
    }


    public function destroy(Status $status)
    {
        $status->delete();

        return response()->noContent();
    }
}
