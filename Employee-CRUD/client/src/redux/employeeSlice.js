import { createSlice } from '@reduxjs/toolkit';

const employeeSlice = createSlice({
  name: 'employee',
  initialState: {
    employees: [],
  },
  reducers: {
    // addEmployee: (state, action) => {
    //   state.employees.push(action.payload);
      // },
    addEmployee: (state, action) => {
        const newEmployee = action.payload;
        // Check if an employee with the same eid already exists
        const existingEmployee = state.employees.find(
        (employee) => employee.eid === newEmployee.eid
        );

        // If not, add the new employee
        if (!existingEmployee) {
            state.employees.push(newEmployee);
        }
      },
    updateEmployee: (state, action) => {
        const updatedEmployee = action.payload;
        const index = state.employees.findIndex(
            (employee) => employee.email === updatedEmployee.email
        );

        // If the employee is found, update the entry in the array
        if (index !== -1) {
            state.employees[index] = updatedEmployee;
        }
    },
    
      deleteEmployee: (state, action) => {
        const emailToDelete = action.payload;
        state.employees = state.employees.filter(
            (employee) => employee.email !== emailToDelete
      );
    },
  },
});

export const { addEmployee, updateEmployee, deleteEmployee  } = employeeSlice.actions;
export const Employees = (state) => state.employee.employees;

export default employeeSlice.reducer;
