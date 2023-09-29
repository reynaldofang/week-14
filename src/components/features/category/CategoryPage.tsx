import React from "react";
import { Table, Switch } from "antd";

const CategoryTable = () => {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Is Active",
      dataIndex: "is_active",
      key: "is_active",
      render: (isActive: boolean) => (
        <Switch checked={isActive} disabled />
      ),
      // Menentukan jenis data 'isActive' sebagai boolean
    },
  ];

  // Data kategori yang akan ditampilkan dalam tabel
  const dummyData = [
    { key: "1", id: 1, name: "Kategori 1", is_active: true },
    { key: "2", id: 2, name: "Kategori 2", is_active: false },
    // ... tambahkan data kategori lainnya sesuai kebutuhan
  ];

  return (
    <div>
      <Table dataSource={dummyData} columns={columns} />
    </div>
  );
};

export default CategoryTable;
