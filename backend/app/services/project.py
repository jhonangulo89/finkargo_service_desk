from app.models.project import Project as ProjectModel
from app.schemas.project import ProjectCreate, ProjectUpdate
from uuid import UUID

class ProjectService():
    def __init__(self, db) -> None:
        self.db = db

    def get_projects(self):
        result = self.db.query(ProjectModel).all()
        return result

    def get_project(self, id: UUID):
        result = self.db.query(ProjectModel).filter(ProjectModel.project_id == id).first()
        return result

    def create_project(self, project: ProjectCreate):
        new_project = ProjectModel(**project.dict())
        self.db.add(new_project)
        self.db.commit()
        return

    def update_project(self, id: int, project: ProjectUpdate):
        result = self.db.query(ProjectModel).filter(ProjectModel.project_id == id).first()
        if not result:
            return None
        for attr, value in project.dict().items():
            setattr(result, attr, value)
        self.db.commit()
        return result

    def delete_project(self, id: UUID):
        result = self.db.query(ProjectModel).filter(ProjectModel.project_id == id).first()
        if not result:
            return None
        self.db.delete(result)
        self.db.commit()
        return result
