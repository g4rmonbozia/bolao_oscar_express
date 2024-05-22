import React from "react";
import DataTable from 'react-data-table-component';

export default function ListaApostas({ apostas = [] }) {


    const colunas = [
        {
            name: 'Nome',
            selector: row => row.nome,
            sortable: true,
        },
        {
            name: 'E-mail',
            selector: row => row.email,
        },
    ];

    const opcoes = { rowsPerPageText: 'Linhas por página:', rangeSeparatorText: 'de' };

    function handleRowSelect({selectedRows}) {
        console.log(selectedRows[0]?.id);
    }

    return (
        <DataTable
            columns={colunas}
            data={apostas}
            pagination
            paginationPerPage={5}
            dense
            responsive
            striped
            paginationComponentOptions={opcoes}
            defaultSortFieldId={1}
            selectableRows
            selectableRowsHighlight
            selectableRowsSingle
            onSelectedRowsChange={handleRowSelect}
        />
    )
}