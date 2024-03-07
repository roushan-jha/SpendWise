import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { GlobalContext } from '../contexts'

const TransactionForm = ({onClose, isOpen}) => {

    const {formData, setFormData, value, setValue, handleFormSubmit} = useContext(GlobalContext);

    function handleFormChange(e) {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        handleFormSubmit(formData);
    }
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <form onSubmit={handleSubmit}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add New Transaction</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel>Enter Description</FormLabel>
                            <Input
                                placeholder='Enter Transaction description'
                                name='description'
                                type='text'
                                onChange={handleFormChange} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Enter Amount</FormLabel>
                            <Input
                                placeholder='Enter Transaction amount'
                                name='amount'
                                type='text'
                                onChange={handleFormChange} />
                        </FormControl>
                        <RadioGroup 
                        mt={'5'}
                        value={value}
                        onChange={setValue}>
                            <Radio
                                colorScheme='blue'
                                value='income'
                                name='type'
                                checked={formData.type === 'income'}
                                onChange={handleFormChange}
                                mr={'2'}
                            >Income</Radio>
                            <Radio
                                colorScheme='red'
                                value='expense'
                                name='type'
                                checked={formData.type === 'expense'}
                                onChange={handleFormChange}
                                ml={'2'}
                            >Expense</Radio>
                        </RadioGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button mr={'4'}
                        onClick={onClose}>Cancel</Button>
                        <Button type='submit' onClick={onClose}>Add</Button>
                    </ModalFooter>
                </ModalContent>
            </form>
        </Modal>
    )
}

export default TransactionForm