import { FC } from 'react';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
interface ChartOfAccount {
    account_name: string;
    account_code: string;
    type: string;
}

interface ChartOfAccountsProps {
    chartOfAccounts: ChartOfAccount[];
}

const ChartOfAccounts: FC<ChartOfAccountsProps> = ({ chartOfAccounts: ChartOfAccounts }) => {
    return (
        <>
            <div className='p-2'>
                <h1 className="text-2xl font-bold text-center p-3">Chart of Accounts</h1>
                <Table className="mt-4">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Code</TableHead>
                            <TableHead>Account Name</TableHead>
                            <TableHead>Type</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {ChartOfAccounts.map((account) => (
                            <TableRow key={account.account_code}>
                                <TableCell>{account.account_code}</TableCell>
                                <TableCell>{account.account_name}</TableCell>
                                <TableCell>{account.type}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </>
    )
}

export default ChartOfAccounts
