import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import tw, { styled } from 'twin.macro';

interface IRequirementsForm {
  businessName: string;
  contentCategory: string;
  targetAudience: string;
  numberOfAuthors: number;
  websiteFeatures: string[];
}

const RequirementsFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 0.5rem;
`;

const SubmitButton = styled.button`
  background-color: #28a745;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<IRequirementsForm>();

  const onSubmit: SubmitHandler<IRequirementsForm> = (data) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log(data);
      setLoading(false);
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} aria-label="Gather Requirements Form">
      <RequirementsFormContainer>
        <div>
          <Label htmlFor="businessName">Business Name</Label>
          <Input
            id="businessName"
            type="text"
            placeholder="Enter your business name"
            {...register('businessName', { required: 'This field is required' })}
            aria-invalid={errors.businessName ? true : false}
            aria-describedby={errors.businessName ? 'business-name-error' : undefined}
          />
          <p id="business-name-error" role="alert">
            {errors.businessName?.message}
          </p>
        </div>

        <div>
          <Label htmlFor="contentCategory">Content Category</Label>
          <Select
            id="contentCategory"
            {...register('contentCategory', { required: 'This field is required' })}
            aria-invalid={errors.contentCategory ? true : false}
            aria-describedby={errors.contentCategory ? 'content-category-error' : undefined}
          >
            <option value="">Choose a category</option>
            <option value="news">News</option>
            <option value="blog">Blog</option>
            <option value="ebooks">E-books</option>
          </Select>
          <p id="content-category-error" role="alert">
            {errors.contentCategory?.message}
          </p>
        </div>

        <div>
          <Label htmlFor="targetAudience">Target Audience</Label>
          <Input
            id="targetAudience"
            type="text"
            placeholder="Enter your target audience"
            {...register('targetAudience', { required: 'This field is required' })}
            aria-invalid={errors.targetAudience ? true : false}
            aria-describedby={errors.targetAudience ? 'target-audience-error' : undefined}
          />
          <p id="target-audience-error" role="alert">
            {errors.targetAudience?.message}
          </p>
        </div>

        <div>
          <Label htmlFor="numberOfAuthors">Number of Authors</Label>
          <Input
            id="numberOfAuthors"
            type="number"
            placeholder="Enter number of authors"
            {...register('numberOfAuthors', { required: 'This field is required' })}
            aria-invalid={errors.numberOfAuthors ? true : false}
            aria-describedby={errors.numberOfAuthors ? 'number-of-authors-error' : undefined}
          />
          <p id="number-of-authors-error" role="alert">
            {errors.numberOfAuthors?.message}
          </p>
        </div>

        <div>
          <Label htmlFor="websiteFeatures">Website Features</Label>
          <div>
            <Checkbox {...register('websiteFeatures', { required: false })} value="search" />
            Search
            <Checkbox {...register('websiteFeatures', { required: false })} value="blogging" />
            Blogging
            <Checkbox {...register('websiteFeatures', { required: false })} value="e-commerce" />
            E-commerce
          </div>
        </div>

        <SubmitButton type="submit" disabled={loading}>
          Submit
        </SubmitButton>
      </RequirementsFormContainer>
    </form>
  );
};

export default GatherRequirements;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import tw, { styled } from 'twin.macro';

interface IRequirementsForm {
  businessName: string;
  contentCategory: string;
  targetAudience: string;
  numberOfAuthors: number;
  websiteFeatures: string[];
}

const RequirementsFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 0.5rem;
`;

const SubmitButton = styled.button`
  background-color: #28a745;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<IRequirementsForm>();

  const onSubmit: SubmitHandler<IRequirementsForm> = (data) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log(data);
      setLoading(false);
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} aria-label="Gather Requirements Form">
      <RequirementsFormContainer>
        <div>
          <Label htmlFor="businessName">Business Name</Label>
          <Input
            id="businessName"
            type="text"
            placeholder="Enter your business name"
            {...register('businessName', { required: 'This field is required' })}
            aria-invalid={errors.businessName ? true : false}
            aria-describedby={errors.businessName ? 'business-name-error' : undefined}
          />
          <p id="business-name-error" role="alert">
            {errors.businessName?.message}
          </p>
        </div>

        <div>
          <Label htmlFor="contentCategory">Content Category</Label>
          <Select
            id="contentCategory"
            {...register('contentCategory', { required: 'This field is required' })}
            aria-invalid={errors.contentCategory ? true : false}
            aria-describedby={errors.contentCategory ? 'content-category-error' : undefined}
          >
            <option value="">Choose a category</option>
            <option value="news">News</option>
            <option value="blog">Blog</option>
            <option value="ebooks">E-books</option>
          </Select>
          <p id="content-category-error" role="alert">
            {errors.contentCategory?.message}
          </p>
        </div>

        <div>
          <Label htmlFor="targetAudience">Target Audience</Label>
          <Input
            id="targetAudience"
            type="text"
            placeholder="Enter your target audience"
            {...register('targetAudience', { required: 'This field is required' })}
            aria-invalid={errors.targetAudience ? true : false}
            aria-describedby={errors.targetAudience ? 'target-audience-error' : undefined}
          />
          <p id="target-audience-error" role="alert">
            {errors.targetAudience?.message}
          </p>
        </div>

        <div>
          <Label htmlFor="numberOfAuthors">Number of Authors</Label>
          <Input
            id="numberOfAuthors"
            type="number"
            placeholder="Enter number of authors"
            {...register('numberOfAuthors', { required: 'This field is required' })}
            aria-invalid={errors.numberOfAuthors ? true : false}
            aria-describedby={errors.numberOfAuthors ? 'number-of-authors-error' : undefined}
          />
          <p id="number-of-authors-error" role="alert">
            {errors.numberOfAuthors?.message}
          </p>
        </div>

        <div>
          <Label htmlFor="websiteFeatures">Website Features</Label>
          <div>
            <Checkbox {...register('websiteFeatures', { required: false })} value="search" />
            Search
            <Checkbox {...register('websiteFeatures', { required: false })} value="blogging" />
            Blogging
            <Checkbox {...register('websiteFeatures', { required: false })} value="e-commerce" />
            E-commerce
          </div>
        </div>

        <SubmitButton type="submit" disabled={loading}>
          Submit
        </SubmitButton>
      </RequirementsFormContainer>
    </form>
  );
};

export default GatherRequirements;