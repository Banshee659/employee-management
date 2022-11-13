<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Log;
use Exception;
use App\Models\Employee;

class EmployeesController extends Controller
{
    public function getEmployeeList()
    {
        try
        {
            $employees = Employee::all();
            return response()->json($employees);

        }
        catch (Exception $e)
        {
            Log::error($e);
        }
    }

    public function getEmployee(Request $request)
    {
        try
        {
            $employeeData = Employee::findOrFail($request->employeeId);
            return response()->json($employeeData);

        }
        catch (Exception $e)
        {
            Log::error($e);
        }
    }

    public function updateEmployee(Request $request)
    {
        try
        {
            $employeeData = Employee::findOrFail($request->employeeId);
            $employeeData->update([
                'employee_name' => $request->employeeName,
                'salary' => $request->employeeSalary,
            ]);

            return response()->json($employeeData);

        }
        catch (Exception $e)
        {
            Log::error($e);
        }
    }

    public function destroy(Employee $employee) {
        try
        {
            $employee->delete();

        }
        catch (Exception $e)
        {
            Log::error($e);
        }
    }
}
