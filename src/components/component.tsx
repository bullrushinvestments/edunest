import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useRouter } from 'next/router';

interface BusinessSpec {
  id: string;
  name: string;
  description: string;
  requirements: string[];
}

const CreateBusinessSpecification: React.FC = () => {
  const [businessSpec, setBusinessSpec] = useState<BusinessSpec | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBusinessSpecification = async () => {
      try {
        const response = await axios.get('/api/business-specification/content');
        setBusinessSpec(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load business specification.');
        setLoading(false);
      }
    };

    fetchBusinessSpecification();
  }, []);

  if (loading) return <div className="flex items-center justify-center h-screen">Loading...</div>;
  if (error) return <div className="flex items-center justify-center h-screen">{error}</div>;

  const { name, description, requirements } = businessSpec!;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4" aria-label={`Business Specification for ${name}`}>
        Business Specification: {name}
      </h1>
      <p className="mb-6" dangerouslySetInnerHTML={{ __html: description }} />
      <ul role="list" className="list-disc pl-5">
        {requirements.map((requirement, index) => (
          <li key={index} aria-label={`Requirement ${index + 1}`}>
            {requirement}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useRouter } from 'next/router';

interface BusinessSpec {
  id: string;
  name: string;
  description: string;
  requirements: string[];
}

const CreateBusinessSpecification: React.FC = () => {
  const [businessSpec, setBusinessSpec] = useState<BusinessSpec | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBusinessSpecification = async () => {
      try {
        const response = await axios.get('/api/business-specification/content');
        setBusinessSpec(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load business specification.');
        setLoading(false);
      }
    };

    fetchBusinessSpecification();
  }, []);

  if (loading) return <div className="flex items-center justify-center h-screen">Loading...</div>;
  if (error) return <div className="flex items-center justify-center h-screen">{error}</div>;

  const { name, description, requirements } = businessSpec!;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4" aria-label={`Business Specification for ${name}`}>
        Business Specification: {name}
      </h1>
      <p className="mb-6" dangerouslySetInnerHTML={{ __html: description }} />
      <ul role="list" className="list-disc pl-5">
        {requirements.map((requirement, index) => (
          <li key={index} aria-label={`Requirement ${index + 1}`}>
            {requirement}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CreateBusinessSpecification;