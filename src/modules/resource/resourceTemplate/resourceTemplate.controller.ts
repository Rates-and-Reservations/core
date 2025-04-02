import { Request, Response } from "express";
import * as resourcetemplateService from "@/services/resourcetemplate.service";
import { NotFoundError } from "@/errors";


export const listResourcesTemplate = async (req: Request, res: Response) => {
  const { merchantId } = req.params;
  const resourceTemplate = await resourcetemplateService.listResourceTemplates({ merchantId });
  res.json(resourceTemplate);
}

export const createResourceTemplate = async (req: Request, res: Response) => {
  const { body } = req;
  const resourceTemplate = await resourcetemplateService.createResourceTemplate(body);
  res.status(201).json(resourceTemplate);
}

export const updateResourceTemplate = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  const resourceTemplate = await resourcetemplateService.updateResourceTemplate(id, body);
  res.json(resourceTemplate);
}

export const deleteResourceTemplate = async (req: Request, res: Response) => {
  const { id } = req.params;
  await resourcetemplateService.deleteResourceTemplate(id);
  res.status(204).send();
}

export const getResourceTemplate = async (req: Request, res: Response) => {
  const { id } = req.params;
  const resourceTemplate = await resourcetemplateService.getResourceTemplateById(id);
  res.json(resourceTemplate);
}

export const cloneResourceTemplate = async (req: Request, res: Response) => {
  const { id } = req.params;
  const resourceTemplate = await resourcetemplateService.getResourceTemplateById(id);
  if (!resourceTemplate) {
    throw new NotFoundError("Resource Template");
  }
  const { id: _, createdAt, updatedAt, merchantId, ...clone } = resourceTemplate;
  const cloned = JSON.parse(JSON.stringify(clone));
  const resourceTemplateClone = await resourcetemplateService.createResourceTemplate({
    ...cloned, name: `${clone.name} - Copy`, merchant: resourceTemplate.merchantId
  });
  res.status(201).json(resourceTemplateClone);
}
