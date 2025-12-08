import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import clsx from 'clsx';

interface Test {
  id: string;
  question: string;
  answer: string;
}

interface WriteTestsProps {
  onCreateTest: (test: Test) => void;
  loading?: boolean;
}

const validationSchema = Yup.object({
  question: Yup.string().required('Question is required'),
  answer: Yup.string().required('Answer is required')
});

const WriteTests: React.FC<WriteTestsProps> = ({ onCreateTest, loading }) => {
  const [tests, setTests] = useState<Test[]>([]);
  
  const formik = useFormik({
    initialValues: { question: '', answer: '' },
    validationSchema,
    onSubmit: (values) => {
      const newTest: Test = {
        id: crypto.randomUUID(),
        question: values.question,
        answer: values.answer
      };
      
      onCreateTest(newTest);
      setTests([...tests, newTest]);
      formik.resetForm();
    }
  });

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Create a New Test</h2>
      
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="question" className="block text-sm font-medium text-gray-700">Question</label>
          <input
            type="text"
            id="question"
            name="question"
            value={formik.values.question}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-invalid={formik.touched.question && Boolean(formik.errors.question)}
            className={clsx(
              'mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500',
              { 'border-red-300 placeholder-red-300 text-red-900': formik.touched.question && Boolean(formik.errors.question) }
            )}
          />
          <div className="text-sm text-red-600">{formik.touched.question && formik.errors.question}</div>
        </div>

        <div>
          <label htmlFor="answer" className="block text-sm font-medium text-gray-700">Answer</label>
          <input
            type="text"
            id="answer"
            name="answer"
            value={formik.values.answer}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-invalid={formik.touched.answer && Boolean(formik.errors.answer)}
            className={clsx(
              'mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500',
              { 'border-red-300 placeholder-red-300 text-red-900': formik.touched.answer && Boolean(formik.errors.answer) }
            )}
          />
          <div className="text-sm text-red-600">{formik.touched.answer && formik.errors.answer}</div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={clsx(
            'w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium',
            { 'bg-gray-300': loading },
            { 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500': !loading }
          )}
        >
          {loading ? 'Creating...' : 'Create Test'}
        </button>
      </form>

      <div className="mt-6">
        <h3 className="text-lg font-medium mb-4">Existing Tests</h3>
        
        <ul role="list" className="divide-y divide-gray-200">
          {tests.map(test => (
            <li key={test.id} className="py-4 flex justify-between items-center">
              <div className="flex-1 space-x-2 truncate">
                <p className="text-sm font-medium text-gray-900">{test.question}</p>
                <p className="text-sm text-gray-500">{test.answer}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import clsx from 'clsx';

interface Test {
  id: string;
  question: string;
  answer: string;
}

interface WriteTestsProps {
  onCreateTest: (test: Test) => void;
  loading?: boolean;
}

const validationSchema = Yup.object({
  question: Yup.string().required('Question is required'),
  answer: Yup.string().required('Answer is required')
});

const WriteTests: React.FC<WriteTestsProps> = ({ onCreateTest, loading }) => {
  const [tests, setTests] = useState<Test[]>([]);
  
  const formik = useFormik({
    initialValues: { question: '', answer: '' },
    validationSchema,
    onSubmit: (values) => {
      const newTest: Test = {
        id: crypto.randomUUID(),
        question: values.question,
        answer: values.answer
      };
      
      onCreateTest(newTest);
      setTests([...tests, newTest]);
      formik.resetForm();
    }
  });

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Create a New Test</h2>
      
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="question" className="block text-sm font-medium text-gray-700">Question</label>
          <input
            type="text"
            id="question"
            name="question"
            value={formik.values.question}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-invalid={formik.touched.question && Boolean(formik.errors.question)}
            className={clsx(
              'mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500',
              { 'border-red-300 placeholder-red-300 text-red-900': formik.touched.question && Boolean(formik.errors.question) }
            )}
          />
          <div className="text-sm text-red-600">{formik.touched.question && formik.errors.question}</div>
        </div>

        <div>
          <label htmlFor="answer" className="block text-sm font-medium text-gray-700">Answer</label>
          <input
            type="text"
            id="answer"
            name="answer"
            value={formik.values.answer}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-invalid={formik.touched.answer && Boolean(formik.errors.answer)}
            className={clsx(
              'mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500',
              { 'border-red-300 placeholder-red-300 text-red-900': formik.touched.answer && Boolean(formik.errors.answer) }
            )}
          />
          <div className="text-sm text-red-600">{formik.touched.answer && formik.errors.answer}</div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={clsx(
            'w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium',
            { 'bg-gray-300': loading },
            { 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500': !loading }
          )}
        >
          {loading ? 'Creating...' : 'Create Test'}
        </button>
      </form>

      <div className="mt-6">
        <h3 className="text-lg font-medium mb-4">Existing Tests</h3>
        
        <ul role="list" className="divide-y divide-gray-200">
          {tests.map(test => (
            <li key={test.id} className="py-4 flex justify-between items-center">
              <div className="flex-1 space-x-2 truncate">
                <p className="text-sm font-medium text-gray-900">{test.question}</p>
                <p className="text-sm text-gray-500">{test.answer}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WriteTests;