import { Button, Table } from "reactstrap";


const DepartmentTable = ({ data, setEdit, showModal, setShowModal, deleteDepartment}) => {

    const sendData = (department) => {
        setEdit(department)
        setShowModal(!showModal)
    }

    return (
        <Table striped responsive>
            <thead>
                <tr>
                    <th>Name</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {

                    (data.length < 1) ? (
                        <tr>
                            <td colSpan="4">No records</td>
                        </tr>
                    ) : (
                        data.map((item) => (

                            <tr key={item.idDepartment}>
                                <td>{item.name}</td>
                                <td>
                                    <Button color="primary" size="sm" className="me-2"
                                        onClick={() => sendData(item) }
                                    >Edit</Button>
                                    <Button color="danger" size="sm"
                                        onClick={() => deleteDepartment(item.idDepartment)}
                                    >Delete</Button>
                                </td>
                            </tr>
                        ))
                    )
                }
            </tbody>
        </Table>
    )
}

export default DepartmentTable;