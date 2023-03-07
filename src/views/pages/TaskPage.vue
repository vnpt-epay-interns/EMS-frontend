<script setup>
    import { ref, inject, watchEffect } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    import { VUE_APP_BACKEND_URL } from '../../../env'
    import axios from 'axios'

    const store = inject('store')
    const route = useRoute()
    const router = useRouter()
    // list selected employees for manager
    const employees = ref([])
    const isDisabled = ref(false)
    const errorMessage = ref('')
    const token = localStorage.getItem('accessToken') === null ? store.state.accessToken : localStorage.getItem('accessToken')
    const options = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }

    const task = store.state.task

    const title = ref('')
    const parentId = ref(null)
    const description = ref('')
    const priority = ref('')
    const status = ref('')
    const employeeId = ref('')
    const estimateHours = ref('')
    const completion = ref()
    const startDate = ref(new Date().toISOString().substring(0, 10))
    const endDate = ref(new Date().toISOString().substring(0, 10))
    const employeeName = ref('')

    const resetTask = () => {
        title.value = null
        parentId.value = null
        description.value = null
        priority.value = null
        status.value = null
        employeeId.value = null
        estimateHours.value = null
        completion.value = null           
        startDate.value = new Date().toISOString().substring(0, 10)
        endDate.value = new Date().toISOString().substring(0, 10)
        employeeName.value = null
    }

    const isValidInput = () => {
        if (title.value === null) {
            errorMessage.value = 'Title is required'
            return false
        }
        if (isNaN(parentId.value)) {
            errorMessage.value = 'Parent task must be a number'
            return false
        }
        if (description.value === null) {
            errorMessage.value = 'Description is required'
            return false
        }
        if (priority.value === null) {
            errorMessage.value = 'Priority is required'
            return false
        }
        if (status.value === null) {
            errorMessage.value = 'Status is required'
            return false
        }
        if (employeeName.value === null) {
            errorMessage.value = 'Employee is required'
            return false
        }
        if (estimateHours.value === null) {
            errorMessage.value = 'Estimate hours is required'
            return false
        }
        if (isNaN(estimateHours.value)) {
            errorMessage.value = 'Estimate hours must be a number'
            return false
        }
        if (completion.value === null) {
            errorMessage.value = 'Completion is required'
            return false
        }
        if (Date.parse(endDate.value) - Date.parse(startDate.value) < 0) {
            errorMessage.value = 'End date must be greater than start date'
            return false
        }
        return true     
    }

    if (store.state.user.role === 'EMPLOYEE') {
        isDisabled.value = true
    }
    
    if (task !== null) {
        title.value = task.title
        parentId.value = task.parentId
        description.value = task.description
        priority.value = task.priority
        status.value = task.status
        employeeId.value = task.employeeId
        estimateHours.value = task.estimateHours
        completion.value = task.completion
        startDate.value = task.startDate
        endDate.value = task.endDate
        employeeName.value = task.employeeName
    }

    if (window.location.pathname === '/task') {
        resetTask()
    }   

    watchEffect( async () => {
        if (store.state.user.role !== 'MANAGER') {
            return
        }
        store.state.isLoading = true
        // get all employees for manager in TaskPage
        const allEmployeesResponse = await axios.get(`${VUE_APP_BACKEND_URL}/api/manager/get-all-employees`, options)
        employees.value = allEmployeesResponse.data.data
        store.state.isLoading = false
    })

    const handleClick = async () => {
        if (!isValidInput()) {
            store.state.popup.displayForMilliSecond(errorMessage.value, 2000)
            return
        }
        
        store.state.isLoading= true;
        try {
            if (store.state.user.role === 'EMPLOYEE') {
                const task = {
                    status: status.value,
                    completion: completion.value
                }
                const response = await axios.put(`${VUE_APP_BACKEND_URL}/api/employee/update-task/${route.params.id}`, task , options)

                if (response.data.status === 200) {
                    store.state.popup.displayForMilliSecond(response.data.message, 2000, true)
                } else {
                    store.state.popup.displayForMilliSecond(response.data.message, 2000)
                }
            } else {
                // get employee id from employee name
                employeeId.value = employees.value.find(e => (e.firstName + " " + e.lastName) === employeeName.value).id 
                const task = {
                    title: title.value,
                    description: description.value,
                    status: status.value,
                    completion: completion.value,
                    priority: priority.value,
                    startDate: startDate.value,
                    endDate: endDate.value,
                    employeeId: employeeId.value,
                    estimateHours: estimateHours.value,
                    parentId: parentId.value
                }

                if (route.params.id !== undefined) {
                    const response = await axios.put(`${VUE_APP_BACKEND_URL}/api/manager/update-task/${route.params.id}`, task, {
                        headers: {
                            "Authorization": `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        }
                    })
                    
                    if (response.data.status === 200) {
                        store.state.popup.displayForMilliSecond(response.data.message, 2000, true)
                    } else {
                        store.state.popup.displayForMilliSecond(response.data.message, 2000)
                    }
                } else {
                    const response = await axios.post(`${VUE_APP_BACKEND_URL}/api/manager/create-task`, task, options)
                    if (response.data.status === 200) {
                        store.state.popup.displayForMilliSecond(response.data.message, 2000, true)
                        // after creating successfully, reset all fields
                        resetTask()
                    } else {
                        store.state.popup.displayForMilliSecond(response.data.message, 2000)
                    }
                }
            }
        } catch (error) {
            store.state.popup.displayForMilliSecond("Action failed", 2000)
        }
        store.state.isLoading= false
    }

    const addReportForTask = () => {
        router.push({ name: "WriteReportForTaskPage", params: { id: route.params.id } })
    }
</script>

<template>
    <div class="wrapper">
        <header>
            <h1>Project's Name</h1>
        </header>
        <main>
            <div class="row-1">
                <div class="name-field">
                    <label for="title">Title</label>
                    <input type="text" id="title" v-model="title" :disabled="isDisabled">
                </div>

                <div class="parent_task-Field">
                    <label for="parent-task">Parent Task</label>
                    <input type="text" id="parent-task" v-model="parentId" :disabled="isDisabled">
                </div>
            </div>

            <div class="row-2">
                <div class="description-field">
                    <label for="description">Description</label>
                    <textarea name="description" id="description" v-model="description" :disabled="isDisabled"></textarea>
                </div>
            </div>

            <div class="footer-field">
                <div class="selected-field">
                    <div class="priority">
                        <div>Priority</div>
                        <select v-model="priority" :disabled="isDisabled">
                            <option disabled value="">Please select one</option>
                            <option>LOW</option>
                            <option>MEDIUM</option>
                            <option>HIGH</option>
                        </select>
                    </div>
                    <div class="status">
                        <div>Status</div>
                        <select v-model="status" >
                            <option disabled value="">Please select one</option>
                            <option>NEW</option>
                            <option value="IN_PROGRESS">IN-PROGRESS</option>
                            <option value="READY_FOR_REVIEW">READY FOR REVIEW</option>
                            <option>DONE</option>
                        </select>
                    </div>
                    <div class="in-charge">
                        <div>In-Charge</div>
                        <select v-model="employeeName" :disabled="isDisabled">
                            <option disabled value="">Please select one</option>
                            <option v-if="store.state.user.role==='EMPLOYEE'">{{ employeeName }}</option>
                            <option v-for="employee of employees">{{ employee.firstName + " " + employee.lastName }}</option>
                        </select>
                    </div>
                </div>

                <div class="additional-field">
                    <div class="done">
                        <div>Completion(%)</div>
                        <select v-model="completion">
                            <option disabled value="">Please select one</option>
                            <option>10</option>
                            <option>20</option>
                            <option>30</option>
                            <option>40</option>
                            <option>50</option>
                            <option>60</option>
                            <option>70</option>
                            <option>80</option>
                            <option>90</option>
                            <option>100</option>
                        </select>
                    </div>
                    <div class="estimate-field">
                        <label for="estimate">Estimate Time</label>
                        <input type="text" id="estimate" v-model="estimateHours" :disabled="isDisabled">
                    </div>
                    <div class="start_date-field">
                        <label for="start_date">Start date</label>
                        <input type="date" id="start_date" v-model="startDate" :disabled="isDisabled">
                    </div>
                    <div class="end_date-field">
                        <label for="end_date">Due date</label>
                        <input type="date" id="end_date" v-model="endDate" :disabled="isDisabled">
                    </div>
                </div>
            </div>
            <footer>
                <button @click="addReportForTask" v-show="store.state.user.role==='EMPLOYEE'">Add Report</button>
                <button @click="handleClick">Save</button>
            </footer>
        </main>
    </div>
</template>

<style scoped lang="scss">
    input, textarea, select {
        font-size: small;
        width: 100%;
        height: 40px;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin-top: 10px;
    }

    textarea {
        width: 100%;
        height: 100px;
        resize: none;
    }

    .wrapper {
        display: flex;
        flex-direction: column;
        gap:34px;
        padding: 20px;
    }
    
    main {
        display: flex;
        flex-direction: column;
        padding: 0 80px 0;
        gap: 34px;
    }

    .row-1 {
        display: grid;
        justify-content: space-between;
        gap: 15px;
        grid-template-columns: 1fr 1fr;

        input {
            padding: 0 0 0 5px;
        }
    }

    .footer-field {
        display: grid;
        gap: 20px;
        grid-template-columns: 1fr 1fr;
        justify-content: space-between;
    }

    .selected-field {
        display: grid;
        justify-content: space-between;
        grid-template-columns: 150px 150px;
        grid-template-rows: 1fr 1fr;
        gap: 15px;
    }

    .in-charge {
        grid-column-start: 1;
        grid-column-end: 3;
    }

    .additional-field {
        padding-left: 5px;
        display: grid;
        justify-content: space-between;
        gap: 15px;
        grid-template-columns: 1fr 1fr;

        input {
            padding: 0 0 0 5px;
        }
    }

    footer {
        display: flex;
        gap: 20px;
        justify-content: flex-end;
    }

    button {
        background-color: var(--primary);
        color: #fff;
        cursor: pointer;
        border-radius: 5px;
        padding: 10px;
        min-width: 200px;
        height: 44px;
    }

    button:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
</style>