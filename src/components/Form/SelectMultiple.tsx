"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, X } from "lucide-react";

export interface Option {
  label: string;
  value: string;
}

interface MultiSelectProps {
  options: Option[];
  placeholder?: string;
  onChange?: (values: string[]) => void;
  value?: string[];
}

export default function MultiSelect({
  options,
  placeholder = "Select options",
  onChange,
  value,
}: MultiSelectProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const [internalSelected, setInternalSelected] = useState<string[]>([]);
  const selectedValues = value ?? internalSelected;

  const isSelected = (val: string) => selectedValues.includes(val);

  const update = (updated: string[]) => {
    if (!value) {
      setInternalSelected(updated);
    }
    onChange?.(updated);
  };

  const toggleOption = (option: string) => {
    const updated = isSelected(option)
      ? selectedValues.filter((v) => v !== option)
      : [...selectedValues, option];
    update(updated);
  };

  const removeOption = (option: string) => {
    const updated = selectedValues.filter((v) => v !== option);
    update(updated);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full max-w-md">
      {/* Input area */}
      <div
        onClick={() => setOpen(!open)}
        className={`border border-gray-300 rounded-xl p-2 flex items-center flex-wrap gap-1 min-h-[44px] cursor-pointer 
        bg-white shadow-sm hover:shadow-md transition-shadow duration-150`}
      >
        {selectedValues.length === 0 && (
          <span className="text-gray-400 text-sm">{placeholder}</span>
        )}

        {selectedValues.map((val) => {
          const opt = options.find((o) => o.value === val);
          if (!opt) return null;

          return (
            <span
              key={val}
              className="bg-blue-100  text-blue-800 px-3 py-1 rounded-full flex items-center gap-1 text-xs shadow-sm"
            >
              {opt.label}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  removeOption(val);
                }}
                className="hover:text-red-600"
              >
                <X className="w-4 h-4" />
              </button>
            </span>
          );
        })}

        <div className="ml-auto flex items-center">
          <ChevronDown
            className={`w-5 h-5 text-gray-500 transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>

      {/* Dropdown */}
      <div
        className={`absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-10 max-h-64 overflow-y-auto 
        transition-all duration-200 origin-top transform
        ${
          open
            ? "opacity-100 scale-y-100 pointer-events-auto"
            : "opacity-0 scale-y-95 pointer-events-none"
        }`}
      >
        {options.map((option) => (
          <div
            key={option.value}
            onClick={() => toggleOption(option.value)}
            className={`px-4 py-2 cursor-pointer text-xs hover:bg-blue-50 transition-colors ${
              isSelected(option.value)
                ? "bg-blue-100 text-blue-800 font-medium"
                : ""
            }`}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
}

// import MultiSelect from "@/components/Form/SelectMultiple";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// const OPTIONS = [
//   { label: "Manager", value: "manager" },
//   { label: "Admin", value: "admin" },
//   { label: "Employee", value: "employee" },
// ];

// const validationSchema = Yup.object().shape({
//   roles: Yup.array()
//     .min(1, "Sélectionner au moins un rôle")
//     .of(Yup.string().oneOf(OPTIONS.map((o) => o.value))),
// });

// export default function FormikPage() {
//   return (
//     <main className="p-8 max-w-lg mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Formulaire avec MultiSelect</h1>

//       <Formik
//         initialValues={{ roles: [] as string[] }}
//         validationSchema={validationSchema}
//         onSubmit={(values) => {
//           console.log("Submitted:", values);
//         }}
//       >
//         {({ values, setFieldValue, errors, touched, isSubmitting }) => (
//           <Form className="space-y-4">
//             <label className="block font-medium">Rôles</label>

//             <MultiSelect
//               options={OPTIONS}
//               placeholder="Choisir un ou plusieurs rôles"
//               value={values.roles}
//               onChange={(vals) => setFieldValue("roles", vals)}
//             />

//             {errors.roles && touched.roles && (
//               <div className="text-red-600 text-sm">{errors.roles}</div>
//             )}

//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//             >
//               Envoyer
//             </button>

//             <pre className="bg-gray-100 p-2 text-xs mt-4">
//               {JSON.stringify(values, null, 2)}
//             </pre>
//           </Form>
//         )}
//       </Formik>
//     </main>
//   );
// }
