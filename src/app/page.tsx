"use client";

import MultiSelect from "@/components/Form/SelectMultiple";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const OPTIONS = [
  { label: "Manager", value: "manager" },
  { label: "Admin", value: "admin" },
  { label: "Employee", value: "employee" },
];

const validationSchema = Yup.object().shape({
  roles: Yup.array()
    .min(1, "Sélectionner au moins un rôle")
    .of(Yup.string().oneOf(OPTIONS.map((o) => o.value))),
});

export default function FormikPage() {
  return (
    <main className="p-8 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Formulaire avec MultiSelect</h1>

      <Formik
        initialValues={{ roles: [] as string[] }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Submitted:", values);
        }}
      >
        {({ values, setFieldValue, errors, touched, isSubmitting }) => (
          <Form className="space-y-2">
            <label className="block font-medium">Rôles</label>

            <MultiSelect
              options={OPTIONS}
              placeholder="Choisir un ou plusieurs rôles"
              value={values.roles}
              onChange={(vals) => setFieldValue("roles", vals)}
            />

            {errors.roles && touched.roles && (
              <div className="text-red-600 text-sm">{errors.roles}</div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Envoyer
            </button>

            <pre className="bg-gray-100 p-2 text-xs mt-4">
              {JSON.stringify(values, null, 2)}
            </pre>
          </Form>
        )}
      </Formik>
    </main>
  );
}
