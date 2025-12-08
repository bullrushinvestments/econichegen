import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import type { InferProps } from 'prop-types';

interface Requirement {
  name: string;
  description: string;
}

interface GatherRequirementsFormInputs {
  requirementName: string;
  requirementDescription: string;
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const { register, handleSubmit, reset } = useForm<GatherRequirementsFormInputs>();

  const onSubmit: SubmitHandler<GatherRequirementsFormInputs> = (data) => {
    if (!data.requirementName || !data.requirementDescription) return;
    setRequirements([...requirements, data]);
    reset();
  };

  const removeRequirement = (index: number) => {
    const newRequirements = requirements.filter((_, i) => i !== index);
    setRequirements(newRequirements);
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <label htmlFor="requirementName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Requirement Name</label>
        <input type="text" id="requirementName" placeholder="Enter requirement name" {...register('requirementName')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />

        <label htmlFor="requirementDescription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Requirement Description</label>
        <textarea id="requirementDescription" placeholder="Enter requirement description" {...register('requirementDescription')} rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required></textarea>

        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Requirement</button>
      </form>

      {requirements.length > 0 && (
        <div className="mt-4 space-y-3">
          {requirements.map((requirement, index) => (
            <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded-lg shadow-md dark:bg-gray-700">
              <span>{requirement.name}</span>
              <button onClick={() => removeRequirement(index)} type="button" className="text-red-600 hover:text-red-900 focus:outline-none">Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GatherRequirements;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import type { InferProps } from 'prop-types';

interface Requirement {
  name: string;
  description: string;
}

interface GatherRequirementsFormInputs {
  requirementName: string;
  requirementDescription: string;
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const { register, handleSubmit, reset } = useForm<GatherRequirementsFormInputs>();

  const onSubmit: SubmitHandler<GatherRequirementsFormInputs> = (data) => {
    if (!data.requirementName || !data.requirementDescription) return;
    setRequirements([...requirements, data]);
    reset();
  };

  const removeRequirement = (index: number) => {
    const newRequirements = requirements.filter((_, i) => i !== index);
    setRequirements(newRequirements);
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <label htmlFor="requirementName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Requirement Name</label>
        <input type="text" id="requirementName" placeholder="Enter requirement name" {...register('requirementName')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />

        <label htmlFor="requirementDescription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Requirement Description</label>
        <textarea id="requirementDescription" placeholder="Enter requirement description" {...register('requirementDescription')} rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required></textarea>

        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Requirement</button>
      </form>

      {requirements.length > 0 && (
        <div className="mt-4 space-y-3">
          {requirements.map((requirement, index) => (
            <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded-lg shadow-md dark:bg-gray-700">
              <span>{requirement.name}</span>
              <button onClick={() => removeRequirement(index)} type="button" className="text-red-600 hover:text-red-900 focus:outline-none">Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GatherRequirements;