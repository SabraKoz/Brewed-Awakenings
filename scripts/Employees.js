import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()

document.addEventListener(
    "click",
    (clickEmployeeEvent) => {
        const employeeClicked = clickEmployeeEvent.target
        
        if (employeeClicked.dataset.type === "employee") {
            const employeeId = employeeClicked.dataset.id
            let orderCounter = 0
            const orders = getOrders()

        for (const order of orders) {
            if (parseInt(employeeId) === order.employeeId) {
                orderCounter++
            }
        }
        window.alert(`${employeeClicked.dataset.name} sold ${orderCounter} products`)
        }
    }
)

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li data-type="employee" data-id="${employee.id}" data-name="${employee.name}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

