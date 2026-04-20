import React, { useEffect } from 'react';

/**
 * A lightweight SEO component.
 * In a real production environment where server-side rendering is used,
 * react-helmet-async is preferred. For a Vite SPA, this approach updates
 * document meta tags directly.
 *
 * @param {Object} props
 * @param {string} [props.title] The title of the page to be set in the document title.
 * @param {string} [props.description] The description of the page to be set in the meta tag.
 * @param {string} [props.keywords] The keywords for the page to be set in the meta tag.
 */
export function SEO({ title, description, keywords }) {
  useEffect(() => {
    if (title) {
      document.title = `${title} | Digital Detox Assistant`;
    }

    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        document.head.appendChild(metaDescription);
      }
      metaDescription.content = description;
    }

    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.name = 'keywords';
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.content = keywords;
    }
  }, [title, description, keywords]);

  return null;
}