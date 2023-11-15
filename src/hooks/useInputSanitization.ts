import { useState } from "react";

const useInputSanitization = (keywordsBeforeSanitized: string = "", maxLength: number = 255) => {
  const [sanitizedKeywords, setSanitizedKeywords] = useState<string>(keywordsBeforeSanitized);

  const sanitizeHtml = (input: string): string => {
    return input.replace(/<[^>]*>/g, "");
  };

  const escapeHtmlEntities = (input: string): string => {
    return input.replace(/&/g, "").replace(/</g, "").replace(/>/g, "");
  };

  const limitInputLength = (input: string): string => {
    return input.slice(0, maxLength);
  };

  const trimInput = (input: string): string => {
    return input.trim();
  };

  const sanitizeKeywords = (input: string): string => {
    let sanitizedKeywords = sanitizeHtml(input);
    sanitizedKeywords = escapeHtmlEntities(sanitizedKeywords);
    sanitizedKeywords = limitInputLength(sanitizedKeywords);
    sanitizedKeywords = trimInput(sanitizedKeywords);

    return sanitizedKeywords;
  };

  const handleKeywordsChange = (newKeywords: string) => {
    const sanitizedKeywords = sanitizeKeywords(newKeywords);
    setSanitizedKeywords(sanitizedKeywords);
  };

  return {
    sanitizedKeywords,
    handleKeywordsChange,
  };
};

export default useInputSanitization;
