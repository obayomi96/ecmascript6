// Functions with default parameters

// yearSalary, bonus is equal to an object whoch holds team and individual bonus
const calculatePayment = (yearSalary, bonus = {
    teamBonus: 0,
    employeeBonus: 0
}) => {
    return yearSalary + bonus.teamBonus + bonus.employeeBonus;
}

// yearSalary, bonus is equal to an object whoch holds team and individual bonus
document.write(calculatePayment(22000, {teamBonus: 10000, employeeBonus: 6000}));