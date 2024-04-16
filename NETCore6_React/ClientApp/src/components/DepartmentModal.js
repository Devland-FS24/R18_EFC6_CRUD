import { useEffect, useState } from 'react'
import { Modal, ModalBody, ModalHeader, Form, FormGroup, Input, Label, ModalFooter, Button } from "reactstrap"

const modelDeparment = {
    idDepartment: 0,
    name: ""
}

const DepartmentModal = ({ showModal, setShowModal, saveDepartment, edit, setEdit, editDepartment }) => {

    const [department, setDepartment] = useState(modelDeparment);

    const updateData = (e) => {

        console.log(e.target.name + " : " + e.target.value)
        setDepartment(
            {
                ...department,
                [e.target.name]: e.target.value
            }
        )
    }

    const sendData = () => {

        if (department.idDepartment == 0) {
            saveDepartment(department)
        } else {
            editDepartment(department)
        }

        setDepartment(modelDeparment)
    }

    useEffect(() => {
        if (edit != null) {
            setDepartment(edit)
        } else {
            setDepartment(modelDeparment)
        }
    }, [edit])

    const closeModal = () => {

        setShowModal(!showModal)
        setEdit(null)
    }

    return (

        <Modal isOpen={showModal}>
            <ModalHeader>

                {department.idDepartment == 0 ? "New Department" : "Edit Department" }
                
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Name</Label>
                        <Input name="name" onChange={(e) => updateData(e)} value={department.name} />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" size="sm" onClick={sendData}>Save</Button>
                <Button color="danger" size="sm" onClick={closeModal}>Close</Button>
            </ModalFooter>
        </Modal>
    )

}

export default DepartmentModal;