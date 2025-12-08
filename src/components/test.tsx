import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import clsx from 'clsx';

interface TestFormValues {
  title: string;
  content: string;
}

const WriteTestsComponent: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    content: Yup.string()
      .min(10, 'Content must be at least 10 characters long')
      .required('Content is required'),
  });

  const formik = useFormik<TestFormValues>({
    initialValues: {
      title: '',
      content: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      setError(null);

      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        alert('Test created successfully!');
      } catch (err) {
        setError('Failed to create test. Please try again.');
      }

      setLoading(false);
    },
  });

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Write Tests</h2>
      {error && <p role="alert" aria-live="assertive" className="mb-3 text-red-500">{error}</p>}
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block mb-1 font-medium">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            className={clsx('w-full px-3 py-2 border rounded', formik.touched.title && formik.errors.title ? 'border-red-500' : '')}
            placeholder="Enter test title..."
            {...formik.getFieldProps('title')}
          />
          {formik.touched.title && formik.errors.title && (
            <p role="alert" aria-live="assertive" className="text-sm text-red-500">{formik.errors.title}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="content" className="block mb-1 font-medium">Content</label>
          <textarea
            id="content"
            name="content"
            rows={6}
            className={clsx('w-full px-3 py-2 border rounded', formik.touched.content && formik.errors.content ? 'border-red-500' : '')}
            placeholder="Enter test content..."
            {...formik.getFieldProps('content')}
          />
          {formik.touched.content && formik.errors.content && (
            <p role="alert" aria-live="assertive" className="text-sm text-red-500">{formik.errors.content}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className={clsx('w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded', loading && 'opacity-50')}
        >
          {loading ? 'Creating...' : 'Create Test'}
        </button>
      </form>
    </div>
  );
};

export default WriteTestsComponent;

import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import clsx from 'clsx';

interface TestFormValues {
  title: string;
  content: string;
}

const WriteTestsComponent: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    content: Yup.string()
      .min(10, 'Content must be at least 10 characters long')
      .required('Content is required'),
  });

  const formik = useFormik<TestFormValues>({
    initialValues: {
      title: '',
      content: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      setError(null);

      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        alert('Test created successfully!');
      } catch (err) {
        setError('Failed to create test. Please try again.');
      }

      setLoading(false);
    },
  });

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Write Tests</h2>
      {error && <p role="alert" aria-live="assertive" className="mb-3 text-red-500">{error}</p>}
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block mb-1 font-medium">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            className={clsx('w-full px-3 py-2 border rounded', formik.touched.title && formik.errors.title ? 'border-red-500' : '')}
            placeholder="Enter test title..."
            {...formik.getFieldProps('title')}
          />
          {formik.touched.title && formik.errors.title && (
            <p role="alert" aria-live="assertive" className="text-sm text-red-500">{formik.errors.title}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="content" className="block mb-1 font-medium">Content</label>
          <textarea
            id="content"
            name="content"
            rows={6}
            className={clsx('w-full px-3 py-2 border rounded', formik.touched.content && formik.errors.content ? 'border-red-500' : '')}
            placeholder="Enter test content..."
            {...formik.getFieldProps('content')}
          />
          {formik.touched.content && formik.errors.content && (
            <p role="alert" aria-live="assertive" className="text-sm text-red-500">{formik.errors.content}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className={clsx('w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded', loading && 'opacity-50')}
        >
          {loading ? 'Creating...' : 'Create Test'}
        </button>
      </form>
    </div>
  );
};

export default WriteTestsComponent;