"use client";

import UserMultiSelect, { User } from "@/components/Form/SelectMultiplePromise";
import { useState, useEffect } from "react";

export default function UserSelectionPage() {
  const [selectedUserIds, setSelectedUserIds] = useState<string[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulation de chargement asynchrone
    const fetchUsers = async () => {
      setLoading(true);
      try {
        // En pratique, vous feriez un appel API ici
        await new Promise((resolve) => setTimeout(resolve, 1500));

        const mockUsers = [
          {
            _id: "687e103dc85ec61be700835b",
            firstName: "Faniry",
            lastName: "Ratsimba",
          },
          {
            _id: "687e104ac85ec61be700835e",
            firstName: "Radoniaina",
            lastName: "Andrianarisoa",
          },
          {
            _id: "687e1055c85ec61be7008361",
            firstName: "Tiana",
            lastName: "Rajaonarison",
          },
          {
            _id: "687e1064c85ec61be7008365",
            firstName: "Luc",
            lastName: "Asong",
          },
        ];

        setUsers(mockUsers);
      } catch (error) {
        console.error("Failed to fetch users", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);
  console.log(selectedUserIds);
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Team Selection
        </h1>

        <div className="bg-white p-6 rounded-lg shadow">
          <UserMultiSelect
            users={users}
            placeholder="Sélectionner les membres de l’équipe"
            value={selectedUserIds}
            onChange={setSelectedUserIds}
            loading={loading}
          />

          {/* <div className="mt-4">
            <h3 className="font-medium text-gray-700 mb-2">Selected Team:</h3>
            {loading ? (
              <p className="text-sm text-gray-500">Loading selection...</p>
            ) : selectedUserIds.length > 0 ? (
              <ul className="space-y-1">
                {selectedUserIds.map((userId) => {
                  const user = users.find((u) => u._id === userId);
                  return (
                    <li key={userId} className="text-sm text-gray-600">
                      {user
                        ? `${user.firstName} ${user.lastName}`
                        : "Unknown user"}
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="text-sm text-gray-500">No team members selected</p>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
}
