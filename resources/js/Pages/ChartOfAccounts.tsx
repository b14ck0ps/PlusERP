import { ArrowUpDown } from "lucide-react"
import * as React from "react"
import { FC } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table"

export interface ChartOfAccount {
    account_name: string
    account_code: string
    type: string
}

interface ChartOfAccountsProps {
    chartOfAccounts: ChartOfAccount[]
}

export const columns = [
    {
        accessorKey: "account_code",
        header: ({ column }: { column: any }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Code
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }: any) => row.getValue("account_code"),
    },
    {
        accessorKey: "account_name",
        header: ({ column }: { column: any }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Account Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }: any) => row.getValue("account_name"),
    },
    {
        accessorKey: "type",
        header: "Type",
        cell: ({ row }: any) => row.getValue("type"),
    },
]

const ChartOfAccounts: FC<ChartOfAccountsProps> = ({ chartOfAccounts }) => {
    const [sorting, setSorting] = React.useState<any>([])
    const [columnFilters, setColumnFilters] = React.useState<any>([])
    const [columnVisibility, setColumnVisibility] = React.useState<any>({})
    const [rowSelection, setRowSelection] = React.useState<any>({})

    const table = useReactTable({
        data: chartOfAccounts,
        columns,
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnFiltersChange: setColumnFilters,
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })

    return (
        <div className="p-2">
            <h1 className="text-2xl font-bold text-center p-3">Chart of Accounts</h1>
            <div className="flex items-center py-4">
                <Input
                    placeholder="Filter by account name..."
                    value={(table.getColumn("account_name")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("account_name")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />
            </div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow key={row.id}>
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default ChartOfAccounts
