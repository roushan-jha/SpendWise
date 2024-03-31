import { Button, Flex, Heading, useDisclosure } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import OverView from './OverView'
import ExpenseView from './ExpenseView'
import { GlobalContext } from '../contexts'

const Main = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const {
        totalExpense,
        allTransactions,
        setTotalExpense,
        totalIncome,
        setTotalIncome,
      } = useContext(GlobalContext);

      useEffect(() => {
        let income = 0;
        let expense = 0;
    
        allTransactions.forEach((item) => {
          item.type === "income"
            ? (income = income + parseFloat(item.amount))
            : (expense = expense + parseFloat(item.amount));
        });
    
        setTotalExpense(expense);
        setTotalIncome(income);
      }, [allTransactions]);

      const deleteData = () => {
        localStorage.clear();
      }

    return (
        <Flex
            textAlign={"center"}
            flexDirection={"column"}
            pl={"5"} >
            <Flex
                alignItems={"center"}
                justifyContent={"space-between"}
                mt={"12"} >
                <Heading
                    color={"blue.400"}
                    display={["none", "block", "block", "block", "block"]} >
                    SpendWise
                </Heading>
                <Flex alignItems={"center"} >
                    <Button bg={'blue.300'} color={'black'} ml={'4'}
                     onClick={onOpen}>
                        Add New Transaction
                    </Button>
                    <Button bg={'blue.300'} ml={'2'} mr={'2'} onClick={deleteData}>❌</Button>
                </Flex>
            </Flex>

            <OverView totalExpense={totalExpense} totalIncome={totalIncome} isOpen={isOpen} onClose={onClose} />
            <Flex
                w={"full"}
                alignItems={'flex-start'}
                justifyContent={'space-evenly'}
                flexDirection={['column', 'column', 'column', 'row', 'row']} >
                <ExpenseView data={allTransactions.filter(item => item.type === 'income')} type={'income'} />
                <ExpenseView data={allTransactions.filter(item => item.type === 'expense')} type={'expense'} />
            </Flex>
        </Flex>
    )
}

export default Main