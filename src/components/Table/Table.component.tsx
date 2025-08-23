import {
    Chip,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';

import { TableProps } from './Table.types';

const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
        case 'completed':
            return 'success';
        case 'cancelled':
        case 'failed':
            return 'error';
        case 'in progress':
        case 'pending':
            return 'info';
        default:
            return 'default';
    }
};

const TableComponent = ({ title, description, columns, data }: TableProps) => (
    <TableContainer component={Paper}>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">{description}</Typography>

        <Table>
            <TableHead>
                <TableRow>
                    {columns.map((column) => (
                        <TableCell key={column.key}>{column.label}</TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((row, rowIndex) => (
                    <TableRow key={rowIndex}>
                        {columns.map((column) => (
                            <TableCell key={column.key}>
                                {column.isStatus ? (
                                    <Chip
                                        label={row[column.key]}
                                        color={getStatusColor(row[column.key])}
                                    />
                                ) : (
                                    row[column.key]
                                )}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);

export default TableComponent;
