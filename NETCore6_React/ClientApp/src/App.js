
import { useEffect, useState } from "react"
import { Col, Container, Row, Card, CardHeader, CardBody, Button } from "reactstrap"
import DepartmentModal from "./components/DepartmentModal";
import DepartmentTable from "./components/DepartmentTable";


const App = () => {

    const [departments, setDepartments] = useState([])
    const [showModal, setShowModal] = useState(false);
    const [edit, setEdit] = useState(null)


    const showDepartments = async () => {

        const response = await fetch("api/department/GetDepartments")

        if (response.ok) {
            const data = await response.json();
            setDepartments(data)
        } else {
            console.log("error fetching data")
        }

    }

    useEffect(() => {
        showDepartments()
    }, [])


    const saveDepartment = async (deparment) => {

        const response = await fetch("api/department/SaveDepartment", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(deparment)
        })

        if (response.ok) {
            setShowModal(!showModal);
            showDepartments();
        }

    }

    /*-------------------------------------------------------*/

    const editDepartment = async (deparment) => {

        const response = await fetch("api/department/EditDepartment", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(deparment)
        })

        if (response.ok) {
            setShowModal(!showModal);
            showDepartments();
        }

    }

    /*---------------------------------------------*/

    const deleteDepartment = async (id) => {

        var userchoice = window.confirm("are you sure to delete this item?")

        if (!userchoice) {
            return;
        }

        const response = await fetch("api/department/DeleteDepartment/" + id, {
            method: 'DELETE',
        })

        if (response.ok) {       
            setShowModal(false);
            showDepartments();
        }

    }


    return (
        <Container>
            <Row className="mt-5">
                <Col sm="12">
                    <Card>
                        <CardHeader>
                            <h5>Departments</h5>
                        </CardHeader>
                        <CardBody>
                            <Button size="sm" color="success"
                                onClick={() => setShowModal(!showModal)}
                            >New Department</Button>
                            <hr></hr>
                            <DepartmentTable data={departments}
                                setEdit={setEdit}
                                showModal={showModal}
                                setShowModal={setShowModal}

                                deleteDepartment={deleteDepartment}
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <DepartmentModal
                showModal={showModal}

                setShowModal={setShowModal}
                saveDepartment={saveDepartment}

                edit={edit}
                setEdit={setEdit}
                editDepartment={editDepartment}
            />
        </Container>
    )
}

export default App;